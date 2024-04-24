export type RootStackParamList = {
  Main: undefined;
  Form: { data?: string }; 
};



export interface Guest {
  id: number;
  name: string;
  gender : string
}


export interface GuestState {
  guests: Guest[];
}


export interface ChosenHotel {
  data: {
      get_chosen_hotel: {
          chosen_hotel_room: {
              meal: string;
              region: string;
              meal_code: string;
              room_name: string;
              sply_code: string;
              avail_sply: string;
              hotel_sply: string;
              room_grade: string;
              vendor_code: string;
              hotel_room_type_selected: string;
          };
          chosen_hotel_detail: {
              zip: string;
              star: number;
              phone: string;
              images: {
                  url: string;
                  title: string;
                  thumbnail: string;
              }[];
              address: string;
              latitude: number;
              longitude: number;
              facilities: string[];
              hotel_name: string;
              descriptions: {
                  title: string;
                  description: string;
              }[];
              region_hotel: string;
              is_recommended: boolean;
          };
          chosen_hotel_params: {
              check_in: string;
              check_out: string;
              hotel_code: string;
              hotel_name: string;
              total_room: number;
              guest_adult: number;
              guest_infant: number;
              guest_children: number;
              guest_children_ages: any[];
          };
          chosen_hotel_prices: {
              cxl_policies: {
                  cxl_fee: number;
                  cxl_remark: string;
                  cxl_end_date: string;
                  cxl_start_date: string;
              }[];
              precode_book: string;
              price_detail: {
                  total: number;
                  currency: string;
                  origin_total: number;
                  corporate_fee: number;
                  discount_price: number;
              };
              is_refundable: boolean;
              discount_description: string;
              important_informations: {
                  info: string;
              }[];
          };
          chosen_hotel_expired: string;
      };
  };
}
