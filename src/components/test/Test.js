import { useRef } from "react";
import Link from "react-scroll/modules/components/Link";
import ImageOne from "../title/ImageOne";
import ImageTwo from "../title/ImageTwo";
import ScrollIntoView from 'react-scroll-into-view';
import Title from "../title/Title";
export const Test = () =>{
    
    return (
      <>
        <ScrollIntoView selector="#commentSection">
          <button className="med">
            Jump to bottom
          </button>
        </ScrollIntoView>
      </>
    );
}