import {
  VStack,
  Text,
  useColorMode,
  useStyleConfig,
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


const Uploader = () => {
  // add type defs to function props to get TS support inside function bodies,
  // and not just where functions are passed as props into Dropzone
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({ url: 'https://httpbin.org/post' })

  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
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
        dropzone: { padding: "80px 30px", borderColor: bdrClr },
        inputLabel: { position: 'relative' },
      }}
      inputContent={<InputContent />}
    />
  )
}

export default Uploader;
