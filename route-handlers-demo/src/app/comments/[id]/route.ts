import { comments } from "../data";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = comments.filter((comment) => comment.id === parseInt(id));
  return Response.json(data);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { comment } = body;
  const data = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[data].comment = comment;
  return Response.json(comments[data]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = comments.findIndex((comment) => comment.id === parseInt(id));
  const deletedComment = comments[data];
  comments.splice(data, 1);
  return Response.json(deletedComment);
}
