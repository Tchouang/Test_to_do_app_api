class DeleteApi {

    deleteTask(token,id) {
        return cy.request({
            method: 'DELETE',
            url: `https://qacart-todo.herokuapp.com/api/v1/tasks/${id}`,
            headers:{
                Authorization: `bearer ${token}`,
            },
            body: {
                
            }
            //failOnStatusCode: false,
        })
    }

}

export default DeleteApi