import { useContext, useState } from 'react';
import {
  VStack,
  Text,
  useColorMode,
  useStyleConfig,
  Flex,
} from '@chakra-ui/react';
import { doc, setDoc } from "firebase/firestore";
import Dropzone, { defaultClassNames, IDropzoneProps, IFileWithMeta, ILayoutProps } from 'react-dropzone-uploader'
import { create } from "ipfs-http-client";
import 'react-dropzone-uploader/dist/styles.css';
import StoreContext from '../../../store/Store/StoreContext';
import { useDb } from '../../../hooks/useFirebase';

const client = create({ url: 'https://ipfs.infura.io:5001/api/v0'});

// add type defs to custom LayoutComponent prop to easily inspect props passed to injected components
const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {
  return (
    <div>
      {previews}

      <div {...dropzoneProps}>
        {files.length < maxFiles && input}
      </div>

      {files.length > 0 && submitButton}
    </div>
  )
}

const InputContent = () => {
  return (
    <VStack spacing={2} textAlign="center">
      <Text sx={useStyleConfig('Text', { variant: 'teal' })} fontSize="3xl">Drop your meme here 🖐️🎤</Text>
      <Text
        sx={useStyleConfig('Text', { variant: 'blackAndWhite' })}
        fontSize="lg"
      >
        (JPG, JPEG, PNG, GIF, SVG, ect.)
      </Text>
      <Text
        sx={useStyleConfig('Text', { variant: 'blackAndWhite' })}
        fontSize="lg"
      >
        Be an open source hero and also include the raw files (PSD, PXD, TIFF, ect.)
      </Text>
    </VStack>
  );
}

// we need to call submit method(_bountyId)
interface UploaderProps {
  bountyId: string;
  refreshData: () => void;
  setLoading?: (isLoading: boolean) => void;
}
const Uploader = ({
  bountyId,
  refreshData,
  setLoading,
}: UploaderProps) => {
  const db = useDb();
  const [appState] = useContext(StoreContext);
  const [file, setFile] = useState<Buffer | null>(null);
  const [urlArr, setUrlArr] = useState<any[]>([]);

  function readFileAsync(file: IFileWithMeta):Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(file.file);
  
      reader.onloadend = () => {
        console.log("Buffer data: ", new Buffer(reader.result as ArrayBuffer));
        setFile(new Buffer(reader.result as ArrayBuffer));
        resolve(new Buffer(reader.result as ArrayBuffer));
      };
  
      reader.onerror = reject;
    })
  }

  // add type defs to function props to get TS support inside function bodies,
  // and not just where functions are passed as props into Dropzone
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({ url: 'https://httpbin.org/post' })

  const handleSubmit: IDropzoneProps['onSubmit'] = async (files, allFiles) => {
    if (setLoading) {
      setLoading(true);
    }
    // send to the bounty contract
    const result = await appState.client.makeSubmission(bountyId);
    console.log('result', result);
    const { txnResponse, txnReceipt } = result;
    const { events } = txnReceipt;
    const { data } = events[0];
    console.log('data', data);
    console.log('files:', files);
    console.log('allFiles:', allFiles);
    let tmpArr = [];
    for (let i = 0; i < allFiles.length; i++) {
      const f = allFiles[i];
      let arrayBuffer = await readFileAsync(f);
      try {
        const created = await client.add(arrayBuffer);
        const url = `https://ipfs.infura.io/ipfs/${created.path}`;
        console.log('url', url);
        setUrlArr(prev => [...prev, { src: url }]);
        tmpArr.push({ src: url });
      } catch (error) {
        console.log(error);
      }
      f.remove() 
    } // end for loop
    try {
      console.log('urlArr', urlArr);
      if (db) {
        const submissionsRef = doc(db, "bounties", bountyId, "submissions", data);
        setDoc(submissionsRef, {
          id: data,
          date: new Date(),
          files: tmpArr,
          postedBy: txnReceipt.from,
        });
      } else { console.log('error no db') }
    } catch (error) {
      console.log('error uploading to firebase', error);
    }
    refreshData();
    if (setLoading) {
      setLoading(false);
    }
  }
  
  const { colorMode } = useColorMode()
  const bdrClr = colorMode === 'light' ? "#E2E8F0" : "#ffffff29";

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      LayoutComponent={Layout}
      onSubmit={handleSubmit}
      classNames={{
        inputLabelWithFiles: defaultClassNames.inputLabel
      }}
      styles={{
        dropzone: { borderColor: bdrClr, width: '100%' },
        inputLabel: { position: 'relative', padding: "80px 30px" , width: '100%' },
      }}
      inputContent={<InputContent />}
    />
  )
}

export default Uploader;
