export default defineEventHandler(() => {
    interface Test {
        thing: string
    }
    const test: Test = {
        thing: 'world'
    }
    return test
})