import React, {useState} from 'react';
import './App.css';
import {Modal} from "./components/modal/Modal";
import {SuperButton} from './components/SuperButton';
import styles from './components/SuperButton.module.css'
import {SuperCrosses} from './components/SuperCrosses';


function App() {

    const crosses = [
        { id: 1, model: 'ADIDAS', size: 'XXX' },
        { id: 2, model: 'ABIBAS', size: 'YYY' },
        { id: 3, model: 'PUMA', size: 'ZZZ' }
    ]

    return (
        <div>
            {/*<SuperButton onClick={() => {}} className={styles.redForSuperButton} >*/}
            {/*    Red super button*/}
            {/*</SuperButton>*/}

            {/*<SuperButton onClick={() => {}} className={styles.blueForSuperButton} >*/}
            {/*    Blue super button*/}
            {/*</SuperButton>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <div>Info1</div>*/}
            {/*    <div>Info1</div>*/}
            {/*    <SuperButton onClick={() => {}} className={styles.redForSuperButton} >*/}
            {/*        Red super button*/}
            {/*    </SuperButton>*/}
            {/*</SuperCrosses>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <div>Info2</div>*/}
            {/*    <div>Info2</div>*/}
            {/*    <div>Info2</div>*/}
            {/*    <div>Info2</div>*/}
            {/*    <div>Info2</div>*/}
            {/*    <div>Info2</div>*/}
            {/*    <SuperButton onClick={() => {*/}
            {/*    }} className={styles.blueForSuperButton}>*/}
            {/*        Blue super button*/}
            {/*    </SuperButton>*/}
            {/*</SuperCrosses>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <div>Info3</div>*/}
            {/*    <div>Info3</div>*/}
            {/*    <div>Info3</div>*/}
            {/*    <div>Info3</div>*/}
            {/*    <div>Info3</div>*/}
            {/*    <div>Info3</div>*/}
            {/*    <div>Info3</div>*/}
            {/*    <div>Info3</div>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <SuperButton onClick={() => {*/}
            {/*    }} className={styles.redForSuperButton}>*/}
            {/*        Red super button*/}
            {/*    </SuperButton>*/}
            {/*</SuperCrosses>*/}

            {/*<Modal>*/}
            {/*    <input type="text" placeholder='email' />*/}
            {/*    <input type="password" placeholder='password' />*/}
            {/*    <button type="submit">send</button>*/}
            {/*</Modal>*/}

            <Modal>
                <p>Confident Information</p>
                <input type="text" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="password" placeholder='password2'/>
                <label>
                    <input type="checkbox" name='checkbox-1' />
                    I agree
                </label>
                <button type="submit">send</button>
            </Modal>

        </div>
    );
}


export default App;
