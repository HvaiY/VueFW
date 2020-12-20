export default {
    // 异步方法一般需要再actions 里面 调用 mutations 里面的方法处理
    updateUserInfoAction(context, payload) {

        return new Promise((resolve) => {
            setTimeout(() => {
                context.commit("updateUserInfoActionM", payload.remark);
                payload.success();
                resolve("成功执行了 ");
            }, 1000)
        });

    }

}