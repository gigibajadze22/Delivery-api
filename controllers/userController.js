import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

//users
async function getUsers(req,res){
    try {
        const user = await prisma.users.findMany()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function createUser(req,res) {
    try {
      const { name, email, password } = req.body; 
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await prisma.users.create({
        data: {name, email, password: hashedPassword},
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function editUser(req, res) {
    try {
      const { id } = req.params;
      
      const {name, email,password,roleId } = req.body;  
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await prisma.users.update({
        where: { id: parseInt(id) },
        data: {name, email,password:hashedPassword,roleId },
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  async function deleteUser(req, res) {
    try {
      const { id } = req.params;
      await prisma.users.delete({
        where: { id: parseInt(id) },
      });
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function signin(req,res){
    const {email, password} = req.body;
    const user = await prisma.users.findUnique({where: {email}})
    
   
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid){
      return res.status(401).json({message: "Invalid credentals"})
    }
  
    const token = jwt.sign({id:user.id }, process.env.JWT_SECRET, { 
      expiresIn: '1h' 
    });
    res.json({token, user})
  }




export {getUsers, createUser,editUser,deleteUser,signin}