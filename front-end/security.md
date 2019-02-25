# 注入
    sql注入
        1. 封装api参数
        2. 特殊字符转义
        3. 白名单数据
    LDAP注入
    OS命令注入

# 无效认证和session管理方式
    使用广泛使用的认证控件和session管理模块

# XSS
    <script>注入
    
    1. 输入数据进行转义
    2. 白名单控制输入
    3. CSP: header加Content-Security-Policy 
    4. 富文本使用anti-xss library

# CSRF
    伪造请求

    1. GET请求不修改数据
    2. 不让第三方访问Cookie
    3. 阻止第三方请求接口
    4. token

    Cookie设置same-site

# 密码安全
