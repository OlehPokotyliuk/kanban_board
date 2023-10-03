import React from "react"
import ContentLoader from "react-content-loader"
import classes from './Loader.module.scss';

export const Loader = (props) => (

  <div className={classes.loader}>
    
    <ContentLoader 
    speed={6}
    height={600}
    backgroundColor="#f3f3f3"
    foregroundColor="#9e9e9e"
    {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="100vw" height="40" />

      <rect x=".5vw" y="50" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="25.5vw" y="50" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="50.5vw" y="50" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="75.5vw" y="50" rx="0" ry="0" width="23vw" height="90" /> 

      <rect x=".5vw" y="154" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="25.5vw" y="154" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="50.5vw" y="154" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="75.5vw" y="154" rx="0" ry="0" width="23vw" height="90" /> 

      <rect x=".5vw" y="254" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="25.5vw" y="254" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="50.5vw" y="254" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="75.5vw" y="254" rx="0" ry="0" width="23vw" height="90" /> 

      <rect x=".5vw" y="354" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="25.5vw" y="354" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="50.5vw" y="354" rx="0" ry="0" width="24vw" height="90" /> 
      <rect x="75.5vw" y="354" rx="0" ry="0" width="23vw" height="90" /> 
    </ContentLoader>
  </div>

)

