import styled from '@emotion/native'

import { colors } from '@/styles/colors'
import { fonts } from '@/styles/fonts'

export const Container = styled.View`
  padding: 0 25px;
`

export const SearchBar = styled.TouchableOpacity`
  width: 300px;
  height: 34px;
  border-radius: 19.5px;
  background-color: ${colors.white};
  margin-top: 27px;
  /* 돋보기 아이콘 추가 */
`

export const NicknameText = styled.Text`
  ${fonts.subtitle1};
  color: ${colors.gray600};
  margin-top: 28px;
`

export const TitleText = styled.Text`
  ${fonts.heading2};
  color: ${colors.gray600};
`

export const CategoryContainer = styled.View`
  flex-direction: row;
  margin-top: 180px;
`

export const ArchivingListContainer = styled.View`
  /* TODO */
`
