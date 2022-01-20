import {
  Box,
  Text,
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
    <Box textAlign="center">
      <Text color="teal">Drop your meme here 🖐️🎤</Text>
      <Text color="teal">(JPEG, PNG, or GIF)</Text>
    </Box>
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
      classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
      inputContent={<InputContent />}
    />
  )
}

export default Uploader;
