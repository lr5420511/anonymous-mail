// 可定制的时间格式化
export const timeFormat = function(when, template = '[y]-[m]-[d] [h]:[mi]:[s]') {
    when = new Date(when);
    const kvs = {
        'sy': when.getYear,
        'y': when.getFullYear,
        'm': function() { return this.getMonth() + 1; },
        'd': when.getDate,
        'h': when.getHours,
        'mi': when.getMinutes,
        's': when.getSeconds,
        'ms': when.getMilliseconds
    };
    return template.replace(new RegExp(`\\[(${Object.keys(kvs).join('|')})\\]`, 'g'), (_, key) => {
        const value = kvs[key].call(when);
        return `${'0'.repeat(Math.max(0, 2 - String(value).length))}${value}`;
    });
};