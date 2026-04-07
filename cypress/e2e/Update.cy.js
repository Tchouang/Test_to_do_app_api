import AuthApi from "../API/AuthApi";
import AddApi from "../API/AddApi";
import UpdateApi from "../API/UpdateApi";

describe('Update To Do App', () => {
    let token;
    let id;
    const auth = new AuthApi();
    const add = new AddApi();
    const update = new UpdateApi();

    beforeEach(() => {
        auth.tryAuth("sabat.pierre@gmail.com", "mypassword")
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('access_token');
                token = response.body.access_token;
            })
            .then(() => add.addTask(token))
            .then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('_id');
                id = response.body._id;
            });
    });

    it('Modifier un todo cas passant', () => {
        update.updateTask(token, id);
    });
});