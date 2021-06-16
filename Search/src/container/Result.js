import '../App.css';
import React, {useState} from 'react';
import { Button, List, Form, Modal, Input } from 'antd';

const CreateInfoForm = ({ visible, onCreate, onCancel, data, visibleNum }) => {
    const [form] = Form.useForm();
    return (
      <Modal visible={visible} title="案件資訊" okText="確認" cancelText="取消" onCancel={onCancel} onOk={onCreate}>
        <Form form={form} layout="vertical" name="form_in_modal" initialValues={{modifier: 'public',}}>
          <Form.Item name="reporter" label="舉報人">
            {(visibleNum < 0) ? "" : data[visibleNum].Reporter}
          </Form.Item>
          <Form.Item name="reporterMail" label="舉報人電子郵件">
            {(visibleNum < 0) ? "" : data[visibleNum].Email}
          </Form.Item >
          <Form.Item name="reportedPerson" label="被舉報人">
            {(visibleNum < 0) ? "" : data[visibleNum].Person}
          </Form.Item>
          <Form.Item name="date" label="案發日期">
            {(visibleNum < 0) ? "" : data[visibleNum].Date}
          </Form.Item>
          <Form.Item name="type" label="違反要點">
            {(visibleNum < 0) ? "" : data[visibleNum].Type}
          </Form.Item>
          <Form.Item name="content" label="舉報內容">
            {(visibleNum < 0) ? "" : data[visibleNum].Content}
          </Form.Item>
          <Form.Item name="evidence" label="舉報材料連結">
             {(visibleNum < 0) ? "" : <a href={data[visibleNum].Evidence}>點此前往</a>}
          </Form.Item>
        </Form>
      </Modal>
    );
};

const Result = ({ data, setSearch, setData }) => {

    const [visible, setVisible] = useState(false);
    const [visibleNum, setVisibleNum] = useState(-1);

    return (
        <div className="App-result">
            <div className="App-menu">
                <Button type="primary" className="menu" onClick={() => {setData([]); setSearch(false);}} block>
                    違法和不良信息查詢平台
                </Button>
            </div>
            <div className="App-all">
                <List itemLayout="vertical" size="large" pagination={{onChange: page => {console.log(page);}, pageSize: 3,}} dataSource={data}
                    footer={
                        <div className="word">
                            犯人列表
                        </div>
                    }
                    renderItem={
                        item => (
                            <List.Item key={item.num}>
                            <List.Item.Meta title={
                                <Button type="primary" className="menu" onClick={() => {setVisibleNum(item.num); setVisible(true);}}>
                                    {item.Person}
                                </Button>
                            } 
                            description={<div className="word">{item.Type}</div>}/>
                    </List.Item>
                    )}
                />
            </div>
            <CreateInfoForm visible={visible} onCreate={() => {setVisible(false); setVisibleNum(-1);}} onCancel={() => {setVisible(false); setVisibleNum(-1);}}
                data={data} visibleNum={visibleNum}/>
        </div>
    );
}

export default Result;