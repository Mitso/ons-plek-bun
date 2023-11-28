export default defineEventHandler(event => {
    interface Test {
        thing: string
    }
    const test: Test = {
        thing: 'world'
    }
    return test
})