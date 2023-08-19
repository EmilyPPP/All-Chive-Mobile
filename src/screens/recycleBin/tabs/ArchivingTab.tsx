import React from 'react'

import { ScrollView, View } from 'react-native'
import { useRecoilState } from 'recoil'

import CheckIcon from '@/assets/icons/check_yellow.svg'
import { ArchivingCard } from '@/components/cards/archivingCard/ArchivingCard'
import i18n from '@/locales'
import { RecycleBinTabProps } from '@/models/Recycle'
import { CheckArchivingState } from '@/state/CheckState'

import {
  TabItemContainer,
  SearchDataText,
  CheckBox,
  Container,
  TabItemCardContainer,
  Title,
  YellowCheck,
  Header,
} from './Tab.style'

/**
 * 삭제된 아카이빙만 보여주는 탭
 */
export const ArchivingTab = ({ archivings, editMode }: RecycleBinTabProps) => {
  const [isCheck, setIsCheck] = useRecoilState(CheckArchivingState)

  /**
   * 체크박스 클릭을 핸들링합니다.
   */
  const handleCheck = (item: number) => {
    if (isCheck.includes(item)) {
      setIsCheck(isCheck.filter((id) => id !== item))
      return
    } else {
      setIsCheck([...isCheck, item])
      return
    }
  }

  return (
    <Container>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <TabItemContainer>
          <Header>
            <SearchDataText>
              {i18n.t('numberOfRecycleItem', { number: archivings.length })}
            </SearchDataText>
            <Title>{i18n.t('archiving')}</Title>
          </Header>
          <TabItemCardContainer>
            {archivings !== undefined &&
              archivings.map((item) => (
                <View key={item.archivingId}>
                  <ArchivingCard
                    item={item}
                    isMine={true}
                    isRecycle={true}
                  />
                  {editMode && <CheckBox onPress={() => handleCheck(item.archivingId)} />}
                  {editMode && isCheck.includes(item.archivingId) && (
                    <YellowCheck onPress={() => handleCheck(item.archivingId)}>
                      <CheckIcon />
                    </YellowCheck>
                  )}
                </View>
              ))}
          </TabItemCardContainer>
        </TabItemContainer>
      </ScrollView>
    </Container>
  )
}
