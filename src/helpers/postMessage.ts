export default async function postMessage(
    url: string,
    data: any,
    successFn: Function,
    failureFn: Function
) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        console.log(response)
        // response.json())
        successFn()
    } catch (error) {
        failureFn()
    }
}
