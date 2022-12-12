import SearchBarScss from "./SearchBar.module.scss";

const SearchBar = () => {

  // function clickMe () {
  //   alert("Okay");
  // }

  return (
    <div className="bg-primary-default p-2 rounded-full flex gap-x-[5px]">
      <input
        type="search"
        placeholder="Search Products"
        class={SearchBarScss.search}
      />
        <button  className={SearchBarScss.button}>
             <svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							
							>
								<path d="m0 0h24v24h-24z" fill="#fff" opacity="0" />
								<path d="m20.71 19.29-3.4-3.39a7.92 7.92 0 0 0 1.69-4.9 8 8 0 1 0 -8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-15.71-8.29a6 6 0 1 1 6 6 6 6 0 0 1 -6-6z" />
							</svg>
        </button>
    </div>
  );
}

export default SearchBar;
