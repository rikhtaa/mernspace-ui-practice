import { Alert, Button, Card, Checkbox, Flex, Input, Layout, message, Space } from "antd"
import { LockFilled, LockOutlined, UserOutlined } from "@ant-design/icons"
import { Form } from "antd";
import { useMutation } from "@tanstack/react-query";
import { login, type Credentials } from "../../http/api";


const loginUser = async (credentials: Credentials)=>{
   const {data} = await login(credentials)
   return data
}
const LoginPage = () => {
  const {mutate, isError, error} = useMutation({
    mutationKey: ['Login'],
    mutationFn: loginUser,
    onSuccess: async()=>{
      console.log('Login successfully')
    }
  })
  return <>
  <Layout style={{height: '100vh', display: "grid", placeItems: "center"}}>
   <Space direction="vertical" align="center" size="large">
   <Card 
   variant={"borderless"}
   title={
    <Space style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <LockFilled />
      Sign in
    </Space>
   }
   style={{ width: 300}}
   >
    <Form 
    initialValues={{remember: true}} 
    onFinish={(values)=>{
      mutate({email: values.Username, password: values.Password})
                  console.log(values)


    }}
    >
      {
        isError && (
          <Alert 
          type="error"
          message={error?.message}
          />
        )
      }
      <Form.Item
      name="Username"
      rules={[{ required: true, message: 'Please input your Username!'}, {type: 'email', message: "Email is not valid"}]}  
      >
      <Input prefix={<UserOutlined/>}placeholder="Username"/>
      </Form.Item>
      <Form.Item
      name="Password"
      rules={[{ required: true, message: 'Please input you Password'}]}
      >
        <Input.Password prefix={<LockOutlined/>} placeholder="Password"/>
      </Form.Item>
        
      <Flex justify="space-between">
       <Form.Item name="remember" valuePropName="checked">
      <Checkbox>
        Remember me
        </Checkbox>
      </Form.Item> 
      <Form.Item>
        <a href="#">Forget Password</a>
      </Form.Item>
      </Flex>
       <Form.Item>
      <Button type="primary" block={true} htmlType='submit'>Login</Button>
       </Form.Item>
    </Form>
   </Card>
   </Space>
  </Layout>
  </>
}

export default LoginPage