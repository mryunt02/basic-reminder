import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddTask(props) {
    const [name, setName] = useState("");
    const [endtime, setEndtime] = useState("");





    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handlePeriodChange(selVal) {
        this.props.handlePeriodChange(selVal);
    }


    return (
        <>

            <button className="block mx-auto bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleShow}>+ Add</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Remind</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setName("");
                        setEndtime("");
                        props.newTask(props.id, name, endtime);

                    }}
                        id="editmodal" className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Day:
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue={endtime}
                                    onChange={(e) => { setEndtime(e.target.value) }}
                                />
                            </div>
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClose}>Close</button>
                    <button className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" form='editmodal' onClick={handleClose}>Add</button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default AddTask;