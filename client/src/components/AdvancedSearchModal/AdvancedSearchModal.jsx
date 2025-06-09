import { Modal } from '@mantine/core'
import React from 'react'

const AdvancedSearchModal = ({opened, setOpened}) => {
  return (
    <Modal
    opened={opened}
    onClose={()=>setOpened(false)}
    closeOnClickOutside
    size={"90rem"}
    >
      AdvancedSearch
    </Modal>
  )
}

export default AdvancedSearchModal