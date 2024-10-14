import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Dispatch, SetStateAction } from 'react';
import React from 'react';

interface IInstructionsProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
    children: any;
    title: string;
}

export default function ModalView(props: IInstructionsProps) {

    return (
        <>
            {props.open &&
                // <div className="modal show" style={{ display: 'block', position: 'absolute' }}>
                <Modal show={props.open} size="lg" scrollable >
                    <Modal.Dialog className='overflow-scroll'>
                        <Modal.Header className="d-flex justify-content-between">
                            <Modal.Title>{props.title}</Modal.Title>
                            <Button onClick={() => props.setOpen(false)}>X</Button>
                        </Modal.Header>

                        <Modal.Body>
                            {React.Children.map(props.children, (child) => (
                                <div>
                                    {child}
                                </div>
                            ))}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => props.setOpen(false)}>Done</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
                // </div>
            }
        </>
    )
}