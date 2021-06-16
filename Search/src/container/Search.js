import '../App.css';
import React, { useState } from 'react';
import { Form, Input, Button, Modal, DatePicker, Select, message }  from 'antd';
import { uploadSearch } from '../axios';

const CollectionCreateForm = ({ visible, onCreate, onCancel, setSearch }) => {

    const [form] = Form.useForm();
    const { RangePicker } = DatePicker;

    return (
      <Modal visible={visible} title="查詢條件" okText="查詢" cancelText="取消" onCancel={onCancel}
        onOk={() => {form.validateFields().then((values) => {
          form.resetFields();
          onCreate(values);
          setSearch(true);
        }).catch((info) => {
          console.log('失敗信息:', info);
        });
      }}>
        <Form form={form} layout="vertical" name="form_in_modal" initialValues={{modifier: 'public',}}>
          <Form.Item name="reporterMail" label="舉報人電子郵件">
            <Input />
          </Form.Item>
          <Form.Item name="reportedPerson" label="被舉報人">
            <Input />
          </Form.Item>
          <Form.Item name="rangeDate" label="案發日期範圍">
            <RangePicker />
          </Form.Item>
          <Form.Item name="type" label="違反要點" rules={[{required: true, message: '請選擇違反要點!',},]}>
            <Select>
              <Select.Option value="none">無限制</Select.Option>
              <Select.Option value="rumor">謠言類</Select.Option>
              <Select.Option value="political">政治類</Select.Option>
              <Select.Option value="others">其他</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    );
};

const Search = ({ setSearch, setData }) => {

    const [visible, setVisible] = useState(false);

    const error = () => {
        message.error('發送出現問題');
    };
    
    const success = () => {
        message.success('發送成功');
    };

    const onCreate = async (values) => {
        const res = await uploadSearch(values);
        if (res.msg === 'failure') {
          error()
        } else {
          setData(res.data)
          success()
        }
        setVisible(false);
    };

    return (
        <>
            <div className="App-title">違法和不良信息查詢平台</div>
            <div className="App-main">
                <div>
                    <Button type="primary" onClick={() => {setVisible(true);}} size='large'>開始查詢</Button>
                    <CollectionCreateForm visible={visible} onCreate={onCreate} onCancel={() => {setVisible(false);}} setSearch={setSearch} />
                </div>
            </div>
        </>
    );
}

export default Search;