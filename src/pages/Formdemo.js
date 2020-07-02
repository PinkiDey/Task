import React from 'react';
import { 
  Form, 
  Upload, 
  Input, Select, Button, message } from 'antd';
  import { UploadOutlined} from '@ant-design/icons';
  import 'antd/dist/antd.css';




  const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span:8,
    },
  },
  wrapperCol: {
    xs: {
      span: 10,
    },
    sm: {
      span: 7,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 20,
      offset: 20,
    },
    sm: {
      span: 12,
      offset: 5,
    },
  },
};

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must be smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const { Option } = Select;

class Regform extends React.Component 
{

  render (){
  
  const onFinishSuccess = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

return (
  <Form 
  {...formItemLayout}
  name="register" 
  initialValues={{ remember: true }}
  onFinishSuccess={onFinishSuccess}
  onFinishFailed={onFinishFailed}
  >   
     
<Form.Item  {...tailFormItemLayout}>
    <h1>  USER-PROFILE</h1>
</Form.Item>
    
<Form.Item
        name="compname"
        label="Company Name"
        rules={[
          {
            required: true,
            message: 'Please enter your Company name!',
          },
        ]}
      >
         <Input/>
</Form.Item>
 <Form.Item
        name="coperson"
        label="Contact Person"
        rules={[
          {
            required: true,
            message: 'Please enter the name of the Contact person!',
          },
        ]}
      >
         <Input/>
 </Form.Item>
 <Form.Item 
      name="adrs" 
      label="Address"
      rules={[
        {
          required: true,
          message: 'Please enter the address!',
        },
      ]}
      >
        <Input.TextArea />
</Form.Item>
<Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[{ required: true, message: 'Please select your state!' }]}
      >
        <Select placeholder="Please select a state">
          <Option value="cal">California</Option>
          <Option value="ohi">Ohio</Option>
          <Option value="flo">Florida</Option>
          <Option value="tex">Texas</Option>
          <Option value="ari">Arizona</Option>
          <Option value="geo">Georgia</Option>
        </Select>
        
 </Form.Item>
<Form.Item 
name="upload"
label="Logo"
rules={[
  {
    required: true,
    message: ' Please enter your Company logo.',
  },
]}
> The logo should be in jpg or png format and should be less than 2MB!
<br></br>
<Upload {...props}
showUploadList={false}
 beforeUpload={beforeUpload} 
 >
    <Button>
      <UploadOutlined /> Click to Upload
    </Button>
  </Upload>
</Form.Item>
 <Form.Item
name="email"
label="E-mail"
rules={[
  {
    type: 'email',
    message: 'The input is not valid E-mail!',
  },
  {
    required: true,
    message: 'Please input your E-mail!',
  },
]}
>
<Input />
</Form.Item>
<Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
}

export default Regform;