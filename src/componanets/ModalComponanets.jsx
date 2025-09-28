import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'
import React from 'react'

export default function ModalComponanets({isOpen, onClose, backdrop, isCommentDeleting, handleDeletComment, title  }) {
  return (
    
    
<Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
        {(onClose) => (
            <>
            { title &&<ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>}
            <ModalBody>
                <p>
                You won't be able to revert this!
                </p>
            
            </ModalBody>
            <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                Cancel
                </Button>
                <Button isLoading={isCommentDeleting} color="danger" onPress={()=> handleDeletComment(onClose) } >
                Delete
                </Button>
            </ModalFooter>
            </>
        )}
        </ModalContent>
    </Modal>



)
}
