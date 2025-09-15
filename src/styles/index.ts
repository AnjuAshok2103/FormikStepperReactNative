import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('screen');
export const styles = StyleSheet.create({
  //progressStepper
  progressSteps: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  progressStepButton: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  progressButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressStepButtonsParent: {
    // marginVertical: 20,
    marginHorizontal: 20,
  },
  progressButtonParent: {
    width: '100%',
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
  },
  progressCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  displayFlex: {
    display: 'flex',
  },
  flexBasis: {
    flexBasis: 'auto',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  lineHeight22: {
    lineHeight: 22,
  },
  fontSize10: {
    fontSize: 10,
  },
  fontSize12: {
    fontSize: 12,
  },
  fontSize14: {
    fontSize: 14,
  },
  underlineBoldTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  stepOverlapStyle: {
    borderTopLeftRadius: 16, // Rounded top-left corner
    borderTopRightRadius: 16, // Rounded top-right corner
  },

  // border
  borderRadius4: {
    borderRadius: 4,
  },
  borderRadius10: {
    borderRadius: 10,
  },
  borderRadius8: {
    borderRadius: 8,
  },
  borderRadius12: {
    borderRadius: 12,
  },
  borderRadius16: {
    borderRadius: 16,
  },
  borderRadiusTop: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  //login
  forgotTextStyle: {
    textDecorationLine: 'none',
    fontSize: 16,
    fontWeight: '400',
  },
  // lessProminentText: {
  //   fontSize: 12,
  //   fontWeight: '400',
  // },
  faceIDText: {
    fontSize: 14,
    fontWeight: '700',
  },
  //socialblock
  termsPrivacyTextStyle: {
    textDecorationLine: 'none',
    fontStyle: 'normal',
  },
  termsPrivacyRegularTextStyle: {
    fontWeight: '300',
    fontSize: 10,
    fontStyle: 'normal',
  },
  //flex
  flex0: {
    flex: 0,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex1WidthFull: {
    flex: 1,
    width: '100%',
  },
  flexWrapStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-end',
  },
  flexGrow1: {
    flexGrow: 1,
  },
  // faqs
  mainHeading: {
    paddingHorizontal: 20,
  },
  headingStyle: {
    // margin: 4,
    fontSize: 16,
    fontWeight: '600',
  },
  securityDepositAmountstyle: {
    fontSize: 27,
    fontWeight: '700',
  },
  answerStyle: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: '400',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: '700',
  },
  //fontWeight
  fontBold: {
    fontWeight: 'bold',
  },
  fontBold300: {
    fontWeight: '300',
  },
  tabBarIndicatorHeight: {
    height: 1,
  },
  headerTitleFontStyle: {
    fontSize: 20,
    fontWeight: 400,
  },
  //margin
  top6: {
    top: '6%',
  },
  topZero: {
    top: 0,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom5: {
    marginBottom: 5,
  },
  marginTop5: {
    marginTop: 5,
  },
  marginTop35: {
    marginTop: -35,
  },
  marginLeft20: {
    marginLeft: 20,
  },
  marginSE5: {
    marginEnd: 5,
    marginStart: 5,
  },
  margin5All: {
    margin: 5,
  },
  margin3All: {
    margin: 3,
  },
  marginTop15: {
    marginTop: 15,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginTop24: {
    marginTop: 24,
  },
  marginTop40: {
    marginTop: 40,
  },
  marginTop50: {
    marginTop: 50,
  },
  marginSE2: {
    marginStart: 2,
    marginEnd: 2,
  },
  marginTopBot5: {
    marginTop: 5,
    marginBottom: 5,
  },
  marginTopNegative5: {
    marginTop: -5,
  },
  marginTopBot1: {
    marginTop: 1,
    marginBottom: 1,
  },
  marginTopBot2: {
    marginTop: 2,
    marginBottom: 2,
  },
  marginTop1: {
    marginTop: 1,
  },
  marginBot1: {
    marginBottom: 1,
  },
  margin20: {
    marginEnd: 20,
  },
  marginR20: {
    marginRight: 20,
  },
  marginR10: {
    marginRight: 10,
  },
  marginT10: {
    marginTop: 10,
  },
  marginHorizontal18: {
    marginHorizontal: 18,
  },
  fontStyleItalic: {
    fontStyle: 'italic',
  },
  lineHeight25: {
    lineHeight: 25,
  },
  subTitleStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    textTransform: 'none',
  },
  font16_Weight500: {
    fontSize: 16,
    fontWeight: '500',
  },
  //balance value
  balanceValue: {
    fontSize: 28,
    fontWeight: '700',
  },
  //section-container
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  //paperbutton
  paperButtonStyle: {
    fontWeight: '700',
    fontSize: 16,
  },
  //chip
  chipParentStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chipStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    height: 50,
  },
  chipTextStyle: {
    fontSize: 14,
    fontWeight: '400',
  },
  //listItemWithIcon
  listItemWithIcontitle: {
    paddingTop: 2,
    fontWeight: '500',
    fontSize: 16,
  },
  //position
  alignSelfCenter: {
    alignSelf: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifySpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  positionCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifySpaceBetweenAndCenter: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifyCenter: { justifyContent: 'center' },
  alignCenter: { alignItems: 'center' },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignStart: { alignItems: 'flex-start' },
  alignItemsBaseLine: { alignItems: 'baseline' },
  //padding
  paddingHorizontal18: {
    paddingHorizontal: 18,
  },
  paddingHorizontal16: {
    paddingHorizontal: 16,
  },
  paddingHorizontal0: {
    paddingHorizontal: 0,
  },
  paddingHorizontal5: {
    paddingHorizontal: 5,
  },
  paddingHorizontal6: {
    paddingHorizontal: 6,
  },
  paddingHorizontal10: {
    paddingHorizontal: 10,
  },
  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
  paddingHorizontal30: {
    paddingHorizontal: 30,
  },
  paddingVH0: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  paddingVertical2: {
    paddingVertical: 2,
  },
  paddingVertical3: {
    paddingVertical: 3,
  },
  paddingVertical5: {
    paddingVertical: 5,
  },
  paddingVertical8: {
    paddingVertical: 8,
  },
  paddingVertical10: {
    paddingVertical: 10,
  },
  paddingVertical14: {
    paddingVertical: 14,
  },
  paddingVertical15: {
    paddingVertical: 15,
  },
  paddingVertical20: {
    paddingVertical: 20,
  },
  paddingTop4: {
    paddingTop: 4,
  },
  paddingTop14: {
    paddingTop: 14,
  },
  paddingTop20: {
    paddingTop: 20,
  },
  paddingT5: { paddingTop: 5 },
  paddingB5: { paddingBottom: 5 },
  paddingB10: { paddingBottom: 10 },
  paddingB15: { paddingBottom: 15 },
  paddingB20: { paddingBottom: 20 },
  paddingB30: { paddingBottom: 30 },
  paddingB50: { paddingBottom: 50 },
  paddingTB5: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  //
  paddingMarginVertical: {
    padding: 18,
    marginVertical: 12,
  },
  paddingMargin18: {
    padding: 18,
    margin: 18,
  },
  marginHorizontal10: {
    marginHorizontal: 10,
  },
  marginHorizontalMinus10: {
    marginHorizontal: -10,
  },
  //flexDirection
  flexDirectionC: {
    flexDirection: 'column',
  },
  flexDirectionR: {
    flexDirection: 'row',
  },
  //width
  width100: {
    width: '100%',
  },
  width90: {
    width: '90%',
  },
  width85: {
    width: '85%',
  },
  width80: {
    width: '80%',
  },
  width30: {
    width: '30%',
  },
  width40: {
    width: '40%',
  },
  width22: {
    width: '22%',
  },
  width20: {
    width: '20%',
  },
  width10: {
    width: '10%',
  },
  width200: {
    width: 200,
  },
  width220: {
    width: 220,
  },
  width250: {
    width: 250,
  },
  width260: {
    width: 260,
  },
  width65: {
    width: 65,
  },
  //
  height60: {
    height: '60%',
  },
  height100: {
    height: '100%',
  },
  widthHeight30: {
    width: 30,
    height: 30,
  },
  widthHeight50: {
    width: 50,
    height: 50,
  },
  widthHeight60: {
    width: 60,
    height: 60,
  },
  widthHeight80: {
    width: 80,
    height: 80,
  },
  widthHeight100: {
    width: 100,
    height: 100,
  },
  width50Height60: {
    width: 50,
    height: 60,
  },
  height250: {
    height: 250,
  },
  height300: {
    height: 300,
  },
  // snackbar
  snackbarStyle: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  //
  gap2: {
    gap: 2,
  },
  gap4: {
    gap: 4,
  },
  gap6: {
    gap: 6,
  },
  gap8: {
    gap: 8,
  },
  gap10: {
    gap: 10,
  },
  gap12: {
    gap: 12,
  },
  gap15: {
    gap: 15,
  },
  gap16: {
    gap: 16,
  },
  gap18: {
    gap: 18,
  },
  gap20: {
    gap: 20,
  },
  gap30: { gap: 30 },
  gap40: { gap: 40 },

  paperButtonsGap: {
    gap: 12,
  },
  //text
  textAlignC: {
    textAlign: 'center',
  },
  textAlignR: {
    textAlign: 'right',
  },
  textAlignL: {
    textAlign: 'left',
  },
  textAlignAuto: {
    textAlign: 'auto',
  },
  //
  marginTop12: {
    marginTop: 12,
  },
  marginLeft9: {
    marginLeft: -9,
  },
  marginLeft14: {
    marginLeft: -14,
  },
  marginright5: {
    marginRight: -5,
  },
  marginRight14: {
    marginRight: 14,
  },
  listItem: {
    marginHorizontal: -14,
  },
  listTitleStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  textTransformNone: {
    textTransform: 'none',
  },
  textTransformCapitalise: {
    textTransform: 'capitalize',
  },
  textTransformUppercase: {
    textTransform: 'uppercase',
  },
  listDescriptionStyle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  },
  h1TextStyle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  mediumVariantTextSize: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 20,
  },
  smallTextSize: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
  },
  mediumTextSize: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
  },
  mediumTextSizeToggleSwitch: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 22,
  },
  mediumTextSize500: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
  },
  largeTextSizeW500: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 28,
  },
  largeTextSize: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 28,
  },
  xlargeTextSize: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 32,
  },
  // margin padding 0
  marginPadding0: {
    padding: 0,
    margin: 0,
  },
  marginLeft0: {
    marginLeft: 0,
  },
  marginLeft5: {
    marginLeft: 5,
  },
  paddingLeft0: {
    paddingLeft: 0,
  },
  paddingLeft10: {
    paddingLeft: 10,
  },
  paddingLeft18: {
    paddingLeft: 18,
  },
  paddingRight0: {
    paddingRight: 0,
  },
  paddingR5: {
    paddingRight: 5,
  },
  paddingR10: {
    paddingRight: 10,
  },
  paddingR18: {
    paddingRight: 18,
  },
  paddingTop0: {
    paddingTop: 0,
  },
  paddingTop50: {
    paddingTop: 50,
  },
  paddingTop70: {
    paddingTop: 70,
  },
  paddingV0: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  paddingH0: {
    paddingStart: 0,
    paddingEnd: 0,
  },
  paddingHorizontal25: {
    paddingHorizontal: 25,
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize18: {
    fontSize: 18,
  },
  fontSize20: {
    fontSize: 20,
  },
  fontSize24: {
    fontSize: 24,
  },
  padding2: {
    padding: 2,
  },
  padding5: {
    padding: 5,
  },
  padding10: {
    padding: 10,
  },
  padding15: {
    padding: 15,
  },
  padding18: {
    padding: 18,
  },
  padding20: {
    padding: 20,
  },
  bottom70: {
    bottom: 70,
  },
  bottom132: {
    bottom: 132,
  },
  //button
  buttonPositionBottom: {
    bottom: 0,
    // position: 'absolute',
    width: '100%',
  },
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  tabButtonLeft: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  tabButtonRight: {
    borderRadius: 4,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  //success-failure-screens
  sucessFailureBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  sucessFailureText: {
    fontWeight: '600',
    fontSize: 14,
  },
  sucessFailureNormalText: {
    fontWeight: '400',
    fontSize: 14,
  },
  sucessFailureTitleText: {
    fontWeight: '600',
    fontSize: 19,
  },
  mainView: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    paddingHorizontal: 20,
  },
  amountHeading: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 17,
    paddingTop: 20,
  },
  textInputHidden: {
    width: 0,
    height: 0,
    overflow: 'hidden',
  },
  textInputStyle: {
    fontSize: 13,
    fontWeight: '400',
    paddingHorizontal: 0,
    width: '100%',
  },
  textInputOutlineBorder: {
    borderRadius: 4,
  },
  textInputAffixStyle: {
    fontSize: 13,
    fontWeight: '400',
    marginLeft: -13,
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  buttonBottom: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
  },
  marginVertical10: {
    marginVertical: 10,
  },
  marginVertical5: {
    marginVertical: 5,
  },
  marginVertical20: {
    marginVertical: 20,
  },
  marginVertical24: {
    marginVertical: 24,
  },
  marginVertical: {
    marginVertical: 0,
  },
  labelTextStyle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
  },
  fontW200: {
    fontWeight: '200',
  },
  fontW400: {
    fontWeight: '400',
  },
  fontW500: {
    fontWeight: '500',
  },
  fontW700: {
    fontWeight: '700',
  },
  //Map style
  renderIconStyle: {
    height: 54,
    width: 54,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderIconsParent: {
    position: 'absolute',
    top: '15%',
    right: 10,
  },
  mapViewStyle: {
    width: width,
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapViewStyle1: {
    width: width,
    flex: 1,
  },
  map_container_view: {
    marginTop: 40,
    marginStart: 0,
    marginEnd: 0,
    flex: 1,
  },
  map_container_view1: {
    marginTop: 40,
    marginBottom: 40,
    marginStart: 0,
    marginEnd: 0,
    flex: 1,
  },
  widthheight_35: {
    width: 35,
    height: 35,
  },
  align_center: {
    alignItems: 'center',
  },
  align_start: {
    alignItems: 'flex-start',
  },
  justifyC_center: {
    justifyContent: 'center',
  },
  justifyC_end: {
    justifyContent: 'flex-end',
  },
  justifyC_start: {
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  gap0: {
    gap: 0,
  },
  flex_paddingR: {
    alignItems: 'flex-end',
    paddingRight: 30,
  },
  marginBottom6: {
    marginBottom: 6,
  },
  marginBottom8: {
    marginBottom: 8,
  },
  marginBottom50: {
    marginBottom: 50,
  },
  marginBottom100: {
    marginBottom: 100,
  },
  borderW1: {
    borderWidth: 1,
  },
  //creditcard
  creditcardstyle: {
    marginTop: 5,
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10,
  },
  //border
  borderB1Rest0: {
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderStartWidth: 0,
    borderEndWidth: 0,
  },
  borderT2Rest0: {
    borderBottomWidth: 0,
    borderTopWidth: 1,
    borderStartWidth: 0,
    borderEndWidth: 0,
  },
  borderAll0Padding10: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderStartWidth: 0,
    borderEndWidth: 0,
    padding: 10,
  },
  borderAll0: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderStartWidth: 0,
    borderEndWidth: 0,
  },
  borderAll1: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderStartWidth: 1,
    borderEndWidth: 1,
  },
  borderBT2Rest0: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderStartWidth: 0,
    borderEndWidth: 0,
  },
  //map
  tabRowPaystation: {
    flexDirection: 'row',
    marginTop: 0,
    position: 'relative',
    marginLeft: 0,
    marginRight: 0,
    flex: 0,
    height: 50,
  },
  animatedtab2: {
    justifyContent: 'center',
    overflow: 'hidden',
    height: '100%',
  },
  animatedtab: {
    position: 'absolute',
    width: '100%',
    height: 50,
    top: 0,
    left: 0,
  },
  animatedtab1: {
    alignItems: 'center',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
  },
  mapType: {
    position: 'absolute',
    bottom: '16%',
    right: 10,
    marginVertical: 2,
    backgroundColor: '#fff',
    height: 57,
    width: 57,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIconMap: {
    position: 'absolute',
    // bottom: 135,
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    height: 57,
    width: 57,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIconMapBottom: {
    position: 'absolute',
    bottom: '26%',
    marginVertical: 2,
    right: 10,
    backgroundColor: '#fff',
    height: 57,
    width: 57,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIconAccounts: {
    position: 'absolute',
    bottom: '5%',
    marginVertical: 2,
    right: 20,
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  businessHourStyle: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '600',
  },
  tabStyleMapView: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tabHeightZero: {
    width: '100%',
    flexDirection: 'row',
    height: 0,
  },
  searchBorderLeftRightRadius0: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  crossIconStyle: {
    right: 0,
    alignSelf: 'flex-end',
  },
  stepInfoTextStyle: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 22,
  },
  fontW600: {
    fontWeight: '600',
  },
  textInputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    fontWeight: 'normal',
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  //bottomsheet
  bottomSheetIcon: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
  },
  legend_view1: {
    width: 20,
    height: 20,
    backgroundColor: '#2FC8AA',
    marginRight: 5,
  },
  legend_view2: {
    width: 20,
    height: 20,
    backgroundColor: '#D92727',
    marginRight: 5,
  },
  legend_text_container: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  marginTop60: {
    marginTop: 60,
  },
  marginTop80: {
    marginTop: 80,
  },
  overlayOutage: {
    display: 'flex',
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 25,
    paddingVertical: 18,
    justifyContent: 'space-evenly',
    gap: 10,
  },
  overlayOutageView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  outageOverLayTextTitle1: {
    fontSize: 15,
    fontWeight: '600',
  },
  outageOverLayText: {
    fontSize: 17,
    fontWeight: '600',
  },
  //textblock
  titleStyle: {
    fontSize: 13,
    fontWeight: '500',
  },
  checkboxLabelStyle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
  linkStyle: {
    color: '#00326D',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  previousChevron: {
    fontSize: 30,
    fontWeight: '500',
    paddingLeft: 10,
  },
  nextChevron: {
    fontSize: 30,
    fontWeight: '500',
    paddingRight: 10,
  },
  flatlistStyle: {
    height: 150,
    paddingHorizontal: 10,
  },
  genericTextInputStyle: {
    width: '100%',
    fontSize: 13,
    fontWeight: '400',
    paddingHorizontal: 0,
  },
  PhoneTextInputIconStyle: {
    borderRadius: 0,
    height: 46,
    width: 50,
  },
  UsernameTextInputIconStyle: {
    borderRadius: 0,
    height: 15,
    width: 20,
  },
  verticalLine: {
    width: 0.5,
    height: '90%',
  },
  linkColor: {
    color: '#00326D',
  },
  textDecorationLineNone: {
    textDecorationLine: 'none',
  },
  tabAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  paymentMethodImage: {
    width: 40,
    height: 20,
    objectFit: 'contain',
  },
  circle21: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
  },
  speechParentView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  microPhoneView: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewKeyboard: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  widthHeight50Percent: {
    width: '50%',
    height: '50%',
  },
  touchableMicrophone: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent',
  },
  touchableTextSubmit: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  animatedView40: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedView30: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  microphoneViewAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 40,
  },
  badgePosition: {
    position: 'absolute',
    top: -12,
    right: -20,
  },
  badgeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  privacyPlaceholderParent: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 5,
    height: '100%',
  },
  answerContainer: {
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
    gap: 2,
  },
  flexShrink1: {
    flexShrink: 1,
  },
  answerText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    flexGrow: 1,
  },
  width80TextCenter: {
    width: 80,
    textAlign: 'center',
  },
  rowBack: {
    alignItems: 'center',
    // flex: 1,
    // width:'100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  deleteButton: {
    flex: 1,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unReadDot: {
    height: 8,
    width: 8,
    borderRadius: 5,
    marginRight: 10,
    alignSelf: 'flex-start',
  },
  imgStyle: { objectFit: 'contain', height: '100%', width: '100%' },
  noMessageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  noMessageIconView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  noMessageText: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  //
  zIndexStyle: {
    zIndex: 1,
  },
  dropdown: {
    marginBottom: 10,
    zIndex: 1000,
  },
  dropdownContainer: {
    backgroundColor: '#fafafa',
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'baseline',
    gap: 8,
    paddingTop: 5,
  },
  button: {
    borderRadius: 20,
    margin: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'box-none',
  },
  chipComment: {
    paddingVertical: 2,
    width: '45%',
  },
  parentSafeareaNoInternet: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'transparent', // Semi-transparent overlay
    pointerEvents: 'box-none',
    zIndex: 10,
  },
  subContainerNoInternet: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    flexDirection: 'row',
    width: '100%',
    height: 40,
  },
  //aplicance inventory

  submitButtonInventory: {
    marginTop: 16,
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitTextInventory: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  applianceContainer: {
    padding: 5,
    margin: 5,
    borderRadius: 8,
  },
  applianceNameS: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  controls: {
    alignItems: 'center',
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  buttonInventory: {
    padding: 10,
    borderRadius: 4,
  },
  buttonTextInventory: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    textAlign: 'center',
    fontSize: 16,
    width: 30,
  },
  crossIconHazardousImage: {
    position: 'absolute',
    top: -5,
    right: -10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    flexDirection: 'row',
    borderRadius: 40,
    marginHorizontal: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  box30: {
    width: 25,
    height: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  round20: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  round26: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  round30: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  round40: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  round60: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  round48: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomWidth: 5,
    padding: 2,
  },
  toastSuccessContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderRadius: 10,
    borderLeftWidth: 5,
    elevation: 2, // Android shadow
    marginHorizontal: 20,
  },
  toastWithBorder10: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderRadius: 10,
    borderBottomWidth: 5,
    elevation: 2, // Android shadow
    marginHorizontal: 20,
  },
  infoToastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderLeftWidth: 5,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Android shadow
    marginHorizontal: 20,
  },
  infoToastMainText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
  },
  infoToastTimerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  errorToastMainText: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonParentBottomView: {
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
  },
  signatureView: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  accountEdit: {
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    right: -5,
  },
  tabBarContainer: {
    flexDirection: 'row',
    borderRadius: 30, // Outer capsule border
    marginHorizontal: 20,
  },
  tabCommon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 7,
  },
  tabLeftSide: {
    borderTopLeftRadius: 30, // Only round the left side
    borderBottomLeftRadius: 30,
  },
  tabRightSide: {
    borderTopRightRadius: 30, // Only round the right side
    borderBottomRightRadius: 30,
  },
  flexWrap200: {
    flexWrap: 'wrap',
    width: 200,
    flexDirection: 'row',
  },
  flexWrap260: {
    flexWrap: 'wrap',
    width: 260,
    flexDirection: 'row',
  },
  bottomSheetModalShadow: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    elevation: 5, // For Android
  },
  snackBarWrapperStyle: {
    borderTopLeftRadius: 16, // Adjust as needed
    borderTopRightRadius: 16, // Adjust as needed
    borderWidth: 0,
    overflow: 'hidden', // Ensures smooth corners
  },
  toggleSwitchLabel: {
    minWidth: 150,
    flexShrink: 1,
  },
  maxWidth90: {
    maxWidth: 90,
  },
  tabBarTextWrap: {
    maxWidth: 100,
    lineHeight: 18,
    flexShrink: 1, // ✅ Prevents text from taking unnecessary space
    minWidth: 50, // ✅ Ensures text isn't too small
    textAlign: 'left', // ✅ Keeps text aligned to the left
  },
  //custom snackbar
  snackbarParentView: {
    position: 'absolute',
    bottom: 0, // ✅ Positioned at the bottom
    width: '100%',
    paddingHorizontal: 10,
    borderTopLeftRadius: 16, // ✅ Rounded Top Borders
    borderTopRightRadius: 16,
    elevation: 4,
    alignSelf: 'center',
    overflow: 'hidden', // ✅ Keep animated border inside
  },
  animatedTopBorderStyle: {
    height: 4,
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopLeftRadius: 16, // ✅ Rounded Top Borders
    borderTopRightRadius: 16,
  },
  toastEnroute: {
    position: 'absolute',
    bottom: 30,
    flex: 1,
    width: '100%',
  },
  rowShrink: {
    flexDirection: 'row',
    flexShrink: 1,
  },
});
