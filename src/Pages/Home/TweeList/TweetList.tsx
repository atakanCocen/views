import { useDispatch, useSelector } from 'react-redux'
import { GET_TWEETS_ROUTE, PRODUCTION_SERVER_DOMAIN, PRODUCTION_SERVER_PORT } from '../../../frontend.config'
import { InterfaceReduxState, setTweetData } from '../../../StateManager/mainSlice'
import * as S from './TweetList.css'
import TweetModel from './TweetModel/TweetModel'

//Types
export interface Interface_TweetData {
  user: string, tweetContent: string
}
export type Type_TweetDataArray = Interface_TweetData[] | null

const TweetList = () => {

  //@ts-ignore  + For some reason the component is rendering twice and the cause is the below code. Not sure why
  const {tweetData} = useSelector((state: InterfaceReduxState) => state.tweetData)
  const dispatch = useDispatch()

  //Get tweet data function
  const getTweetData = ():void => {
    fetch(`http://${PRODUCTION_SERVER_DOMAIN}:${PRODUCTION_SERVER_PORT}/${GET_TWEETS_ROUTE}`)
    .then(res => {return res.json()})
    .then(data=> {dispatch(setTweetData(data))})
  }

  if(tweetData!==null){
    return(
      <S.TweetListContainer>
      {
        tweetData.map((tweet:Interface_TweetData)=> (
          <TweetModel tweetData={tweet}/>
        ))
      }
      </S.TweetListContainer>
    )
  }
  else{
    getTweetData()
    return(null)
  }
}

export default TweetList