/* 整体思路：表单验证 + 图形验证码 + 手机短信验证 + 注册请求 */
$(() => {
    
    
    //按下鼠标(提示输入账号，鼠标离开按别的地方隐藏)；输入完成（鼠标离开）--判断对错（错了，就提示错误）
    $("#txtUserName").mousedown(function(){
        $(".usererr").text("请输入注册的手机号");
        // console.log("#txtUserName");
        $("#txtUserName").keyup(function(){
            let val = $(this).val().trim();
            if (/^1[3-9]\d{9}$/.test(val)){
                $(".usererr").text("");
            }else{
                $(".usererr").text("用户名长度只能在4-50位字符之间");
            }
        })
          
    })

    $("#txtPassword").mousedown(function(){
        $(".pwderr").text("6-20位字符，可使用字母、数字或字符的组合");
        $("#txtPassword").keyup(function(){
            let val = $(this).val().trim();
        if (/^[0-9a-zA-Z]{6,20}$/.test(val)){
            $(".pwderr").text("");
        }else if(/^[0-9]{6,20}$/.test(val)&&/^[a-zA-Z]{6,20}$/.test(val)){
            $(".pwderr").text("该密码比较简单，有被盗风险");
        }else{
            $(".pwderr").text("密码不符合规范");
        }
        })  
    })

    $("#txtRePassword").mousedown(function(){
        $(".repwderr").text("请再次输入密码");
    })
    $("#txtRePassword").blur(function(){
        let val = $("#txtRePassword").val().trim();
        let targetVal = $("#txtPassword").val().trim();
        if (targetVal === val){
            $(".repwderr").text("");
        }else{
            $(".repwderr").text("两次输入密码不一致");
        }
    })




    let captcha1 = new CaptchaMini({
        fontSize: 30,
        length: 5,
        content: "adshdfsnf234j35uetege5",
        lineNum: 3,
        dotNum: 20
    });
    let imgCode;
    captcha1.draw(document.querySelector('#captcha'), r => {
        console.log("验证码 = " + r);
        imgCode = r;
    });


    /* 给手机号码发送短信： */
    /* 思路：给按钮添加点击事件，当点击按钮的时候，检查手机号码是否正确，如果手机号码正确，那么就短信，如果不正确那 */
    // let randomNumber;

    // function getRandom(min, max) {
    //     return parseInt(Math.random() * (max - min + 1)) + min
    // }

    // $("#msgCodeBtn").click(function() {
    //     $("#phoneID").trigger("keyup");
    //     let flag = $(".phone").hasClass("form-group-error");
    //     /* 如果flag的值是flase,那么我们就调用第三方平台发请求 发短信 */
    //     if (flag) return;
    //     randomNumber = getRandom(1000, 9999);
    //     $.ajax({
    //         type: 'post',
    //         url: 'http://route.showapi.com/28-1',
    //         dataType: 'json',
    //         data: {
    //             "showapi_appid": '91032', //这里需要改成自己的appid
    //             "showapi_sign": 'd57b19c8d2d44aef94aee464768a38d8', //这里需要改成自己的应用的密钥secret
    //             "mobile": $("#phoneID").val(),
    //             "content": `{"name":"文顶顶","code":${randomNumber},"minute":"3","comName":"脑子进水集团"}`,
    //             "tNum": "T150606060601",
    //         },
    //         success: (result) => console.log(result)
    //     });
    // });


    
  

       
    })
// });