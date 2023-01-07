import FilterModalScss from "./FilterModal.module.scss"

const Modal = ({open, closeModal}) => {
    if(!open) return null;
  return (
    <div className={FilterModalScss.overlay}>
        <div className={FilterModalScss.modalContainer}>
            <p onClick={closeModal} className={FilterModalScss.closeBtn}>
                X
            </p>
            <p className={FilterModalScss.confirmBtn}>
                    Confirm
            </p>
                <div className={FilterModalScss.filterContainer}>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                    <div className={FilterModalScss.filter}>Test</div>
                </div>

        </div>
    </div>
  )
}

export default Modal