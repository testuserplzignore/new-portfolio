import styled from "styled-components"
import posed from "react-pose"

export const HireMeButton = styled.button`
  background-color: white;
  text-decoration: none;
  position: fixed;
  padding: 16px 32px;
	bottom: 8%;
  cursor: pointer;
	right: 10%;
	border-radius: 5px;
	text-align: center;
	box-shadow: 2px 2px 3px #999;
  
  :focus, :active {
    border-style: solid;
    outline: none;
  }
`

export const AnimatedHireMeButton = posed(HireMeButton)({
  hoverable: true,
  pressable: true,
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 100,
    opacity: 0
  },
  init: {
    backgroundColor: "#fff",
    scale: 1,
    boxShadow: "2px 2px 3px #999"
  },
  hover: {
    backgroundColor: "#E0ECFF",
    scale: 1.2,
    boxShadow: "4px 4px 5px #999"
  },
  press: {
    scale: 1.1,
    boxShadow: "3px 3px 4px #999"
  }
})

export const SubmitButton = styled.button`
         -webkit-appearance: none;
         background-color: white;
         text-decoration: none;
         border: 1px solid lightgray;
         border-radius: 5px;
         margin: 20px;
         width: 150px;
         :focus,
         :active {
           border: 1px solid lightgray;
           outline: none;
         }
       `;

export const AnimatedSubmitButton = posed(SubmitButton)({
  hoverable: true,
  pressable: true,
  init: {
    backgroundColor: "#fff",
    scale: 1,
  },
  hover: {
    backgroundColor: "#E0ECFF",
    scale: 1.2,
  },
  press: {
    scale: 1.1,
  }
});

const Shade = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  height: 100%;
  width: 100vw;
`;

export const ModalBackground = posed(Shade)({
  init: {
    opacity: 0,
    zIndex: -1
  },
  active: {
    duration: 300,
    opacity: 1,
    applyAtStart: {
      zIndex: 1
    }
  },
  hidden: {
    duration: 150,
    opacity: 0,
    applyAtEnd: {
      zIndex: -1
    },
  }
});

export const Modal = posed(styled.div`
  border-radius: 20px;
  background-color: white;
  height: 80%;
  width: 70%;
  position: fixed;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
`)({
  init: {
    zIndex: -1,
    scale: 0,
    x: "50%",
    y: " 50%"
  },
  active: {
    applyAtStart: {
      zIndex: 1
    },
    scale: 1,
    x: "50%",
    y: " 50%",
    transition: {
      scale: {
        duration: 300
      }
    }
  },
  hidden: {
    applyAtEnd: {
      zIndex: -1
    },
    scale: 0,
    x: "50%",
    y: " 50%",
    transition: {
      scale: {
        duration: 300
      }
    }
  }
});

export const ModalContents = styled.div`
  padding: 20px;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormField = styled.div`
         display: flex;
         flex-direction: column;
         margin-top: 20px;
       `;

export const FormInput = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
`;

export const FormText = styled.textarea`
         resize: none;
         margin-top: 10px;
         border: inset 2px rgb(238, 238, 238);
         border-radius: 5px;
         padding: 10px;
         min-height: 150px;
       `;