# Toast()

```js
this.$toast.loading({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner'
});

this.$toast({ 
    message: '操作成功！', 
    duration: 1600
    }
);

this.$toast.clear();

// 主要通知
this.$notify({ type: 'primary', message: '通知内容' });

// 成功通知
Notify({ type: 'success', message: '通知内容' });

// 危险通知
Notify({ type: 'danger', message: '通知内容'， duration: 1000 });

// 警告通知
Notify({ type: 'warning', message: '通知内容' });

```