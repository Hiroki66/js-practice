const user = ['田中三郎','佐藤一郎', '山田三郎', '伊藤花子'];
user.forEach(name => {
    if(name === '山田三郎') {
        console.log('山田三郎さんは存在します');
    } else if(name === '山田花子') {
        console.log('山田花子さんは存在します');
    } else if(name === '田中三郎') {
        console.log('田中三郎さんは存在します');
    } else if (name === '佐藤一郎') {
        console.log('test');
    } else {
        console.log('該当するユーザーは存在しません');
    }
})