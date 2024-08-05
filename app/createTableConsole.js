function createTableConsole(result) {
    const exclude = new Set([
        'title',
        'url',
        'socketPath',
        'workers',
        'statusCodeStats',
        'latency',
        'requests',
        'throughput',
        'start',
        'finish',
    ]);

    const displayRes = {};
    for (const key in result) {
        if (Object.hasOwnProperty.call(result, key)) {
            const element = result[key];
            if (!exclude.has(key)) {
                displayRes[key] = element;
            }
        }
    }
    console.table([displayRes]);
    console.table([result.statusCodeStats]);
    const cleanp = (obj, stat) => {
        obj.Stat = stat;
        return obj;
    };
    console.table(
        [
            cleanp(result.latency, 'Latency, ms'),
            cleanp(result.requests, 'Req/Sec'),
            cleanp(result.throughput, 'Bytes/Sec'),
        ],
        [
            'Stat',
            'average',
            'stddev',
            'min',
            'max',
            'p10',
            'p75',
            'p90',
            'p99',
            'totalCount',
            'total',
            'sent',
        ]
    );
}

module.exports = {
    createTableConsole
}
