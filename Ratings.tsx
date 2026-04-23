import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, ArrowLeft, Star } from "lucide-react";
import { useState } from "react";

export default function Ratings() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Rating submitted:", { rating, review });
  };

  // TODO: Remove mock functionality - Replace with actual data from API
  const mockReviews = [
    {
      id: "1",
      userName: "Sarah Johnson",
      rating: 5,
      comment: "Amazing donor! Fresh vegetables were in perfect condition.",
      date: "Nov 8, 2024",
    },
    {
      id: "2",
      userName: "Mike Chen",
      rating: 5,
      comment: "Very responsive and helpful. The food saved our community kitchen!",
      date: "Nov 5, 2024",
    },
  ];

  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r bg-card">
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold">FoodResq</span>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <header className="flex h-16 items-center gap-4 border-b px-6">
          <Link href="/donor-dashboard">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-display text-2xl font-bold">Ratings & Reviews</h1>
        </header>
        <div className="p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Leave a Review</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-medium">Your Rating</p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="transition-colors hover:text-primary"
                          data-testid={`button-star-${star}`}
                        >
                          <Star
                            className={`h-8 w-8 ${
                              star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Share your experience..."
                      rows={4}
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      data-testid="input-review"
                    />
                  </div>
                  <Button type="submit" className="w-full" data-testid="button-submit-review">
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <h2 className="font-display text-xl font-semibold">Your Reviews</h2>
              {mockReviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base">{review.userName}</CardTitle>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
