import {
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Dropzone, { defaultClassNames, IDropzoneProps, ILayoutProps } from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css';

// add type defs to custom LayoutComponent prop to easily inspect props passed to injected components
const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {
  return (
    <div>
      {previews}

      <div {...dropzoneProps}>{files.length < maxFiles && input}</div>

      {files.length > 0 && submitButton}
    </div>
  )
}

const InputContent = () => {
  return (
    <VStack spacing={2} textAlign="center">
      <Text color={useColorModeValue("teal.500", "teal.200")} fontSize="3xl" colorScheme="teal">Drop your meme here 🖐️🎤</Text>
      <Text color={useColorModeValue("gray.800", "whiteAlpha.800")} fontSize="lg">(JPG, JPEG, PNG, GIF, SVG, ect.)</Text>
      <Text color={useColorModeValue("gray.800", "whiteAlpha.800")} fontSize="lg">Be an open source hero and also include the raw files (PSD, PXD, TIFF, ect.)</Text>
    </VStack>
  );
}


const Uploader = () => {
  // add type defs to function props to get TS support inside function bodies,
  // and not just where functions are passed as props into Dropzone
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({ url: 'https://httpbin.org/post' })

  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      LayoutComponent={Layout}
      onSubmit={handleSubmit}
      classNames={{
        inputLabelWithFiles: defaultClassNames.inputLabel
      }}
      styles={{
        dropzone: { padding: 60 },
        inputLabel: { position: 'relative' },
      }}
      inputContent={<InputContent />}
    />
  )
}

export default Uploader;
