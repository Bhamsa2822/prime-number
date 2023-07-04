import  { User }  from "../models/userSchema.js";
import {prime1,prime2,prime3,prime4,prime5} from "./Primefunc.js";



//Function by which user can select method and he will get answer and it will be created in db.
export const CreateData = async(req,res)=>{
  try{
  let Ans,user,time_elapsed,s,e;
   
      let {a}=req.body;
      let{b}=req.body;
      let{id}=req.body;

      if(a<0 ||b<a){
        res.status(400).json({message:"invalid inputs"});
        return; 
      }

    switch (req.body.id) {
            case req.body.id:1
              s = Date.now();
             Ans = await prime1(a,b);
              e = Date.now();
             time_elapsed = e-s;
             user = await User.create({...req.body,ans:Ans,Time_elapsed:time_elapsed});
             res.status(200).json(Ans);
             console.log(Ans);
            break;
        
            case req.body.id:2
             s = Date.now();
             Ans = await prime2(a,b);
             e = Date.now();
             time_elapsed = e-s;
             user = await User.create({...req.body,ans:Ans,Time_elapsed:time_elapsed});
            res.status(200).json(Ans);
            console.log(Ans);
            break;

            case req.body.id:3
               s = Date.now();
              Ans = await prime3(a,b);
              e = Date.now();
              time_elapsed = e-s;
              user = await User.create({...req.body,ans:Ans,Time_elapsed:time_elapsed});
             res.status(200).json(Ans);
             console.log(Ans);
             break;
        
             case req.body.id:4
              s = Date.now();
              Ans = await prime4(a,b);
              e = Date.now();
              time_elapsed = e-s;
              user = await User.create({...req.body,ans:Ans,Time_elapsed:time_elapsed});
             res.status(200).json(Ans);
             console.log(Ans);
             break;

             case req.body.id:5
              s = Date.now();
             Ans = await prime5(a,b);
             e = Date.now();
             time_elapsed = e-s;
             user = await User.create({...req.body,ans:Ans,Time_elapsed:time_elapsed});
             res.status(200).json(Ans);
             console.log(Ans);
             break;
         
             default:
                res.status(500).json({message:"invalid method"});
            break;
    }
  }catch(error){
    res.status(500).json({message:error.messsage});
  }
};


//API by which user can have access to database (whole database will be visible to him )
export const GetAll = async(req,res)=>{
  try{ 
  const user = await User.find();
    res.status(200).json(user);
  } catch(error){
      res.status(500).json({message:error.message});
  }
};

//API by which user can have access to a particular document in database just by entering id
  export const Getby_id = async(req,res)=>{
   try{
    const {id}=req.params;
    const user = await User.findById(id);
    if(!user)
    {
      res.status(404).json({message:`cannot find any data with id : ${id}`});
    }
    res.status(200).json(user)
 }catch(error){
   res.status(500).json({message:error.message});
 }
};

//API by which user can delete document in database 
export const DeleteData = async(req,res)=>{
  try {
    const{id}=req.params;
    const user = await User.findByIdAndDelete(id);
    if(!user)
    {
      return res.status(404).json({message:`cannot find any data with id : ${id}`});
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};