import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'
import HeaderOption from './HeaderOption'
function HeaderOptains() {
    return (
        <div>
            {/* left section */}
             <div className = 'flex space-x-4'>
             <HeaderOption
                 Icon={SearchIcon}
                 title = 'All'
                 selected 

             />

           <HeaderOption
             Icon={PhotographIcon}
             title = 'Images'
              />
             <HeaderOption
             Icon={PlayIcon}
             title = 'Videos'
              /> 

             <HeaderOption
             Icon={NewspaperIcon}
             title = 'News'
              />
              <HeaderOption
             Icon={MapIcon}
             title = 'Maps'
              />
              <HeaderOption
             Icon={DotsVerticalIcon}
             title = 'More'
              />

             </div>
            {/* Right section */}

            <div className="flex space-x-4">
                <p className='link '>Setting</p>
                <p className='link'>Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptains
