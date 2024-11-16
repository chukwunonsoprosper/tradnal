import image from '../image/headshot-pretty-young-woman-with-crisp-dark-hair-enjoys-pleasant-telephone-talk-holds-takeaway-coffee-cup-wears-round-spectacles-purple-jumper-being-talkative-uses-modern-technologies 2.png'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
const Sidebar = ({ savedJournal }) => {
  const [showNav, updateside] = useState(true)
  const [journalState, updateJournalState] = useState(savedJournal)
  const [monitorInput, inputState] = useState('')
  const hide = () => {
    updateside(c => (c = !c))
  }

  const updateInput = event => {
    inputState(event.target.value)
    monitorInput
      ? updateJournalState(
          journalState.filter(x =>
            x.chartName.includes(monitorInput.toUpperCase())
          )
        )
      : updateJournalState(savedJournal)
  }
  return (
    <>
      {showNav ? (
        <div className='activitySection'>
          <div className='closeb'>
            <span onClick={hide}>{'<<'}</span>
          </div>

          <div className='inputSearch'>
            <i className='ri-search-line'></i>
            <input
              onChange={e => updateInput(e)}
              value={monitorInput}
              type='text'
              placeholder='Search your journal'
            />
          </div>

          <div className='savedJournal'>
            <span>Saved Journal</span>

            <div className='theJournal'>
              {/* <Link to='/home/prosper'><div className="ie">
                                <i className="ri-money-dollar-circle-line"></i>
                                <span id="pair">AUD/USD trade summary</span>
                                <div className="statuewin"></div>
                            </div></Link> */}

              {journalState.length ? (
                journalState.map((x, index) => (
                  <Link key={index} to={'/home/' + x.chartid}>
                    <div className='ie'>
                      <i className='ri-money-dollar-circle-line'></i>
                      <span id='pair'>{x.chartName}</span>
                      <div className={x.type}></div>
                    </div>
                  </Link>
                ))
              ) : (
                <span style={{ fontFamily: 'Manrope' }}>No saved journal</span>
              )}
            </div>
          </div>

          <div className='acc'>
            <div className='profile'>
              <img src={image} alt='' />
              <span>Prosper</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='closebnow'>
          <span onClick={hide}>{'>>'}</span>
        </div>
      )}
    </>
  )
}

export default Sidebar
