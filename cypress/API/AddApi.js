class AddApi {

    addTask(token) {
        return cy.api({
            method: 'POST',
            url: 'https://qacart-todo.herokuapp.com/api/v1/tasks',
            headers:{
                Authorization: `bearer ${token}`,
            },
            body: {
                isCompleted: false,
                item: 'Learn manual Testing'
            }
            //failOnStatusCode: false,
        })
    }

}

export default AddApi