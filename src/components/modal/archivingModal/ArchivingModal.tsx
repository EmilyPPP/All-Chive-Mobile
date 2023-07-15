import React, { useState } from 'react'

import { TouchableOpacity, Image } from 'react-native'
import Modal from 'react-native-modal'
import { useSetRecoilState } from 'recoil'

import { defaultIcons } from '@/assets'
import { BoxButton } from '@/components/buttons/boxButton/BoxButton'
import { SelectArchivingState } from '@/state/upload/SelectArchivingState'

import { CreateArchivingModal } from '../createArchivingModal/CreateArchivingModal'

import {
  ArchivingName,
  CloseButton,
  Container,
  PlusButton,
  PlusButtonText,
  Title,
} from './ArchivingModal.style'

interface ArchivingModalProps {
  onClose: () => void
  isVisible: boolean
}

/**
 *
 */
export const ArchivingModal = ({ onClose, isVisible }: ArchivingModalProps) => {
  const setSelectArchiving = useSetRecoilState(SelectArchivingState)
  const [openPlusModal, setOpenPlusModal] = useState(false)

  /**
   *
   */
  const handleClickArchiving = (value: string) => {
    setSelectArchiving(value)
  }

  /**
   *
   */
  const handleCloseModal = () => {
    setOpenPlusModal(false)
  }

  return (
    <>
      <Modal
        isVisible={isVisible}
        // backdropOpacity={0.5}
        style={{
          margin: 0,
        }}
      >
        <Container>
          <CloseButton onPress={onClose}>
            <Image source={defaultIcons.closeButton} />
          </CloseButton>
          <Title>아카이빙</Title>
          <PlusButton onPress={() => setOpenPlusModal(true)}>
            <PlusButtonText>+ 아카이빙 추가</PlusButtonText>
          </PlusButton>
          <CreateArchivingModal
            onClose={handleCloseModal}
            isVisible={openPlusModal}
          />
          {/* 추후 데이터 가져오는 걸로 변경 */}
          <TouchableOpacity
            onPress={() => handleClickArchiving('디자인')}
            style={{ top: 100 }}
          >
            <ArchivingName>디자인</ArchivingName>
          </TouchableOpacity>
          <BoxButton
            onPress={onClose}
            textKey="확인"
            isDisabled={!SelectArchivingState}
          />
        </Container>
      </Modal>
    </>
  )
}
