import '../assets/stylejon.css'
export const Loading = () => {
    return(
        <div className={"loadingjon"}>
            <div className='container'>
                <svg className='diamond small' viewBox="0 0 30 30">
                    <path className='path' d="M1.56502 15L15 1.56502L28.4351 15L15 28.4351L1.56502 15Z"/>
                </svg>
                <svg className='diamond small rotated' viewBox="0 0 30 30">
                    <path className='path' d="M1.56502 15L15 1.56502L28.4351 15L15 28.4351L1.56502 15Z"/>
                </svg>
                <div className='square centered'></div>
                <svg className='diamond large' viewBox="0 0 58 58">
                    <path className='path' d="M1.42293 29L29 1.42293L56.5771 29L29 56.5771L1.42293 29Z"/>
                </svg>
                <svg className='diamond large rotated' viewBox="0 0 58 58">
                    <path className='path' d="M1.42293 29L29 1.42293L56.5771 29L29 56.5771L1.42293 29Z"/>
                </svg>

                <div className='circle centered'></div>
            </div>
        </div>
    )
}