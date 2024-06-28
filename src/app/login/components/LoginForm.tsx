
"use client"
import { Button, Checkbox, Form, Input } from "antd";
import { FormProps } from "antd/lib";
const LoginForm = () => {
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ direction: 'rtl' }}
        >


            <Form.Item<FieldType>

                label="نام کاربری"
                name="username"
                rules={[{ required: true, message: 'لطفا نام کاربری را وارد نمایید!' }]}
            >
                <Input placeholder="نام کاربری" />
            </Form.Item>

            <Form.Item<FieldType>
                label="کلمه عبور"
                name="password"
                rules={[{ required: true, message: 'لطفا کلمه عبور را وارد نمایید!' }]}
            >
                <Input.Password  placeholder="کلمه عبور" />
            </Form.Item>

            {/* <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"

            >
                <Checkbox>مرا بخاطر بسپار</Checkbox>
            </Form.Item> */}

            <Form.Item >
                <Button style={{width:'100%'}} type="primary" htmlType="submit">
                    ورود
                </Button>
            </Form.Item>
        </Form>);
}

export default LoginForm;