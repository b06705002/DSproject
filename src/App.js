import './App.css';
import { Form, Input, Button, Modal, message, DatePicker, Select, Upload } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { uploadNamed, uploadAnonymous } from './axios';

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const CollectionCreateFormNamed = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal visible={visible} title="具名舉報" okText="提交" cancelText="取消" onCancel={onCancel}
      onOk={() => {form.validateFields().then((values) => {
        form.resetFields();
        onCreate(values);
      }).catch((info) => {
        console.log('失敗信息:', info);
      });
    }}>
      <Form form={form} layout="vertical" name="form_in_modal" initialValues={{modifier: 'public',}}>
        <Form.Item name="reporter" label="舉報人" rules={[{required: true, message: '請輸入舉報人姓名!',},]}>
          <Input />
        </Form.Item>
        <Form.Item name="reporterMail" label="舉報人電子郵件" rules={[{required: true, message: '請輸入舉報人電子郵件!',},]}>
          <Input />
        </Form.Item>
        <Form.Item name="reportedPerson" label="被舉報人" rules={[{required: true, message: '請輸入被舉報人!',},]}>
          <Input />
        </Form.Item>
        <Form.Item name="date" label="案發日期" rules={[{required: true, message: '請選擇案發日期!',},]}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="type" label="違反要點" rules={[{required: true, message: '請選擇違反要點!',},]}>
          <Select>
            <Select.Option value="rumor">謠言類</Select.Option>
            <Select.Option value="political">政治類</Select.Option>
            <Select.Option value="others">其他</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="content" label="舉被內容(概述即可)">
          <Input />
        </Form.Item>
        <Form.Item name="evidence" label="舉報材料" valuePropName="fileList" getValueFromEvent={normFile} rules={[{required: true, message: '請附上舉報材料!',},]}>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>點此上傳</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CollectionCreateFormAnonymous = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal visible={visible} title="匿名舉報" okText="提交" cancelText="取消" onCancel={onCancel}
      onOk={() => {form.validateFields().then((values) => {
        form.resetFields();
        onCreate(values);
      }).catch((info) => {
        console.log('失敗信息:', info);
      });
    }}>
<Form form={form} layout="vertical" name="form_in_modal" initialValues={{modifier: 'public',}}>
        <Form.Item name="reportedPerson" label="被舉報人" rules={[{required: true, message: '請輸入被舉報人!',},]}>
          <Input />
        </Form.Item>
        <Form.Item name="date" label="案發日期" rules={[{required: true, message: '請選擇案發日期!',},]}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="type" label="違反要點" rules={[{required: true, message: '請選擇違反要點!',},]}>
          <Select>
            <Select.Option value="rumor">謠言類</Select.Option>
            <Select.Option value="political">政治類</Select.Option>
            <Select.Option value="others">其他</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="content" label="舉被內容(概述即可)">
          <Input />
        </Form.Item>
        <Form.Item name="evidence" label="舉報材料" valuePropName="fileList" getValueFromEvent={normFile} rules={[{required: true, message: '請附上舉報材料!',},]}>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>點此上傳</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

function App() {

  const [visibleNamed, setVisibleNamed] = useState(false);
  const [visibleAnonymous, setVisibleAnonymous] = useState(false);

  const error = () => {
    message.error('發送出現問題');
  };

  const success = () => {
    message.success('發送成功');
  };

  const onCreateNamed = async (values) => {
    const res = await uploadNamed(values);
    if (res === 'failure') {
      error()
    } else {
      success()
    }
    setVisibleNamed(false);
  };

  const onCreateAnonymous = async (values) => {
    const res = await uploadAnonymous(values);
    if (res === 'failure') {
      error()
    } else {
      success()
    }
    setVisibleAnonymous(false);
  };

  return (
    <div className="App">
      <div className="App-title">違法和不良信息舉報平台</div>
      <div className="App-main">
        <div>
          <Button type="primary" onClick={() => {setVisibleNamed(true);}} className='named' size='large'>具名舉報</Button>
          <CollectionCreateFormNamed visible={visibleNamed} onCreate={onCreateNamed} onCancel={() => {setVisibleNamed(false);}}/>
        </div>
        <div>
          <Button type="primary" onClick={() => {setVisibleAnonymous(true);}} className='anonymous' size='large'>匿名舉報</Button>
          <CollectionCreateFormAnonymous visible={visibleAnonymous} onCreate={onCreateAnonymous} onCancel={() => {setVisibleAnonymous(false);}}/>
        </div>
      </div>
    </div>
  );
}

export default App;