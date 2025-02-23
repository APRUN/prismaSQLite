import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();


async function main(){
// Create a User
    // const user=await prisma.user.create({
    //     data:{
    //         name:"John2",
    //         email:'john2@gmail.com'
    //     }
    // })

    // Get all Users
    const users=await prisma.user.findMany({
        include:{
            article:true,
        }
    });

    // Create article and associate with User
    // const article=await prisma.article.create({
    //     data:{
    //         title:'Title 1',
    //         body:'Body 1',
    //         author:{
    //             connect:{
    //                 id:1,
    //             },
    //         },
    //     },
    // })


    // Get all Articles
    // const articles=await prisma.article.findMany();

    //  Create a User and Article
    // const user=await prisma.user.create({
    //     data:{
    //         name:"Jhon",
    //         email:"jhon33@gmail.com",
    //         article:{
    //             create:{
    //                 title:"Article hu",
    //                 body:"Article hu bhai"
    //             }
    //         }
    //     }
    // })


    // Create another article and associate with User
    // const article=await prisma.article.create({
    //     data:{
    //         title:'Title 2n',
    //         body:'Body 2n',
    //         author:{
    //             connect:{
    //                 id:2,
    //             },
    //         },
    //     },
    // })

    // users.forEach((user)=>{
    //     console.log(`User: ${user.name} Email: ${user.email}`);
    //     user.article.forEach((a)=>{
    //         console.log(`Article: ${a.title} Body: ${a.body}`);
    //     })
    // })


    // Update
    // const user=await prisma.user.update({
    //     where:{
    //         id:1,
    //     },
    //     data:{
    //         name:'John nahi hu'
    //     }
    // })



    // Delete
    // const user=await prisma.user.delete({
    //     where:{
    //         id:1,
    //     }
    // })

}

main().then(async()=>{
    await prisma.$disconnect();
})
.catch(async(e)=>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})



