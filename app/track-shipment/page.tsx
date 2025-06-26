import React from 'react';
import { MyHeader } from '@/components/MyHeader';
import { MyFooter } from '@/components/MyFooter';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const TrackShipmentPage = () => (
  <div className="flex min-h-screen flex-col">
    <MyHeader />
    <main className="flex-1 container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Track Your Shipment</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Enter your tracking number below to get the latest updates on your shipment.
      </p>

      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Enter Tracking Number</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="trackingNumber">Tracking Number</Label>
                <Input id="trackingNumber" placeholder="Enter your tracking number" />
              </div>
              <Button className="w-full">Track Shipment</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
    <MyFooter />
  </div>
);

export default TrackShipmentPage;
