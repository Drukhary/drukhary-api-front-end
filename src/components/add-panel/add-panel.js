import React, {Component} from 'react';

export default class AddPanel extends Component {
    state = {
        message: ''
    }

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.setState({message: e.target.value})
    }

    handleUpdate(form) {
        console.log(form)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.message);
    }

    render() {
        const {message} = this.state;
        const {handleChange, handleSubmit} = this;
        return (
            <div className="add-panel row justify-content-center">
                <form className='col-sm-4' data-dashlane-rid="8ae3f8bcca604e53" data-form-type="ot">
                    <fieldset>
                        <legend>Пост</legend>
                        <div className="form-group">
                            <label htmlFor="messageField" className="form-label mt-4">Введите текст поста</label>
                            <textarea className="form-control" id="messageField" rows="6"
                                      data-dashlane-rid="c6d6a82a50c70dfa" data-form-type="other"
                                      value={message} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="formFile" className="form-label mt-4">Прикрепите файлы</label>
                            <input className="form-control" type="file" id="formFile"
                                   data-dashlane-rid="593a641d2ae27fb0"
                                   data-form-type="other" multiple/>
                        </div>
                        <div className="form-group">
                            <button type="button" className="form-control btn btn-primary" data-dashlane-rid="85d62f37c4e4b00f"
                                    data-dashlane-label="true" data-form-type="action"
                                    onClick={handleSubmit}>Подготовить к публикации
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}