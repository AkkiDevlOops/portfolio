import { NextResponse } from "next/server";

const query = `
 query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if(!username){
        return NextResponse.json(
            {error: "github username required"}
        )
    }

    try{
        const response = await fetch("https://api.github.com/graphql",{
            method:"POST",
            headers:{
                 "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
            body: JSON.stringify({
        query,
        variables: {
          username,
        },
      }),
      next: {
        revalidate: 3600,
      },
            
        }
        )
        const result = await response.json();

    if (result.errors) {
      return NextResponse.json(
        { error: result.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      result.data.user.contributionsCollection.contributionCalendar
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 500 }
    );
  }
}
    