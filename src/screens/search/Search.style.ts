import styled from '@emotion/native'

import { colors } from '@/styles/colors'
import { fonts } from '@/styles/fonts'

export const Container = styled.View`
  padding: 0px 25px;
  width: 100%;
`

export const ScrollContainer = styled.ScrollView``

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

export const BackButton = styled.TouchableOpacity`
  margin-right: 15px;
`

export const LatestContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 11px;
`

export const RelationContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0px 60px;
  margin-bottom: 16px;
`

export const SmallImage = styled.Image`
  width: 9px;
  height: 9px;
`

export const LatestSearch = styled.Text`
  ${fonts.body2}
  color: ${colors.gray600};
  margin-bottom: 5px;
`

export const AllRemoveText = styled.Text`
  ${fonts.body2}
  color: ${colors.gray300};
`

export const ItemText = styled.Text`
  ${fonts.body1}
  color: ${colors.gray400};
`

export const TabContainer = styled.View`
  flex-direction: row;
  display: flex;
  height: 100%;
  align-items: center;
`

export const TabItemContainer = styled.View`
  display: flex;
  height: 100%;
  background-color: ${colors.yellow200};
`

export const TabArchivingCardContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`

export const SearchDataText = styled.Text`
  ${fonts.body2}
  color: ${colors.gray300};
  margin-top: 20px;
  margin-bottom: 3px;
`

export const Title = styled.Text`
  ${fonts.subtitle2}
  color: ${colors.gray600};
`

export const WhiteDivider = styled.View`
  width: 100%;
  height: 11px;
  background-color: ${colors.white};
`
