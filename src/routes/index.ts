import {Router} from 'express'
import * as PageControle from '../controles/pageController'
import * as SearchControle from '../controles/searchController'



const router = Router()  

router.get("/",PageControle.home)
router.get("/dogs",PageControle.dogs)
router.get("/cats",PageControle.cats)
router.get("/fishes",PageControle.fishes)

router.get('/search' , SearchControle.search)


export default router ;