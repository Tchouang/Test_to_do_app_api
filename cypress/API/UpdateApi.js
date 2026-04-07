class UpdateApi {

    updateTask(token,id) {
        return cy.request({
            method: 'PUT',
            url: `https://qacart-todo.herokuapp.com/api/v1/tasks/${id}`,
            headers:{
                Authorization: `bearer ${token}`,
            },
            body: {
                isCompleted: true,
                item: 'Learn manual Testing'
            }
            //failOnStatusCode: false,
        })
    }

}

export default UpdateApi