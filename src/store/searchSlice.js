import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    "a":
      [
        'aaj tak live',
        'atif aslam songs',
        'assubhu bada',
        'aghori',
        'apna college',
        'asmr',
        'asmr eating',
        'arijit singh latest songs',
        'another love',
        'abc',
        'adele',
        'afarin tv',
        'asmr food',
        'atletico madrid'
      ],
    "ak":
      [
        'akshat shrivastava',
        'akshat gupta',
        'akshat gupta podcast',
        'akon',
        'akhara',
        'akinator',
        'aka assassin',
        'aku sayang kamu juga sayang',
        'akshay kumar songs',
        'akhara drama feroze khan episode 1',
        'akhara 17',
        'akhara 18',
        'akhara episode 18',
        'akon lonely'
      ],
    "aks":
      [
        "akshay saini javascript",
        "akshay sad song",
        "akshay salman khan movie",
        "akshay sasane",
        "akshay saif movie",
        'akshay salman khan song',
        'akshay salman katrina',
        'akshay saif song',
      ],
    "akshay": [
      'akshay saini javascript',
      'akshay sad song',
      'akshay salman',
      'akshay salman khan movie',
      'akshay saif movie',
      'akshay saif ali khan ki movie',
      'akshay sayali reels',
      'akshay sargun mehta movie',
      'akshay sangharsh movie',
      'akshay salman khan song',
      'akshay salman katrina',
      'akshay saif song',
      'akshay sasane'

    ],
    "aksh": [
      'akshay saini javascript',
      'akshay sad song',
      'akshay salman',
      'akshay salman khan movie',
      'akshay saif movie',
      'akshay saif ali khan ki movie',
      'akshay sayali reels',
      'akshay sargun mehta movie',
      'akshay sangharsh movie',
      'akshay salman khan song',
      'akshay salman katrina',
      'akshay saif song',
      'akshay sasane'

    ],
    "h": [
      'husn',
      'hba services',
      'hitesh choudhary',
      'happy birthday song',
      'hammer shark tank',
      'happy birthday',
      'huzoor aisa koi intezam ho jaye status',
      'huzoor aisa koi intezam ho jaye naat',
      'hama kurdish',
      'hudutsuz sevda',
      'happy nation',
      'hama star',
      'halparke kurdi',
      'halparke'
    ],
    "hi":[
      'hindi song',
      'hindi movie',
      "highlights of today's cricket match",
      'hitesh choudhary',
      'hindi gana',
      'hindi new movie',
      'hindi film',
      'hindi movie 2023',
      'him and i',
      'hidden love',
      "hips don't lie",
      'hit the road jack',
      'hitler speech',
      'hip hop'
    ],


    "hites": [
      "hitesh choudhary",
      "hitesh choudhary javascript hindi",
      "hitesh choudhary react native",
      "hitesh choudhary python",
      "hitesh choudhary ns3",
      "hitesh choudhary javascript",
      "hitesh choudhary reactjs",
      "hitesh choudhary javascript",
      "hitesh choudhary reactjs",
      "hitesh choudhary next js",
      "hitesh choudhary css",
      "hitesh choudhary backend",
    ],
    "hitesh": [
      "hitesh choudhary",
      "hitesh choudhary javascript hindi",
      "hitesh choudhary react native",
      "hitesh choudhary python",
      "hitesh choudhary ns3",
      "hitesh choudhary javascript",
      "hitesh choudhary reactjs",
      "hitesh choudhary next js",
      "hitesh choudhary css",
      "hitesh choudhary backend",
    ]

  },
  reducers: {
    searchedResultsCache: (state, action) => {
      // Using Object.assign we can merge the state with new value state = {...state, ...action.payload}
      state = Object.assign(state, action.payload)
    }
  }
})
export const { searchedResultsCache } = searchSlice.actions
export default searchSlice.reducer